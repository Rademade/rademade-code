module Api
  module V1
    class SnippetsController < ApplicationController
      skip_before_action  :authenticate_request, only: [:index, :show]
      before_action :set_snippet, only: [:show, :update, :destroy]
      # GET /snippets
      def index
        @snippets = Snippet.all
      end

      # GET /snippets/1
      def show
        @snippet = find_snippet
      end

      # POST /snippets
      def create
        @snippet = Snippet.new(snippet_params)
        if @snippet.save
          render json: @snippet, status: :created
        else
          render json: @snippet.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /snippets/1
      def update
        if @snippet.update(snippet_params)
          render json: @snippet
        else
          render json: @snippet.errors, status: :unprocessable_entity
        end
      end

      # DELETE /snippets/1
      def destroy
        @snippet.destroy
      end

      private
      # Use callbacks to share common setup or constraints between actions.
      def find_snippet
        Snippet.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def snippet_params
        params.require(:snippet).permit(:title, :description, :sref, :user_id)
      end
    end

  end
end

