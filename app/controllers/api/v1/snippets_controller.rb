module Api
  module V1
    class SnippetsController < ApplicationController
      before_action :authenticate_request, except: [:index, :show]
      def index
        @snippets = Snippet.all
      end
      def show
        @snippet = snippet
      end
      def create
        @snippet = Snippet.new(snippet_params)
        @snippet.user = current_user
        @snippet.save!
      end
      def update
        snippet.update!(snippet_params)
      end
      def destroy
        snippet.destroy
      end

      private
      def snippet
        Snippet.find(params[:id])
      end
      def snippet_params
        params.require(:snippet).permit(:title, :description, :sref, :user_id)
      end
    end

  end
end

