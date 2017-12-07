module Api
  module V1
    class LinksController < ApplicationController
      before_action :set_link, only: [:show, :update, :destroy]
      skip_before_action  :authenticate_request, only: [:index, :show]

      def index
        respond_to do |links|
          links.json { render json: Link.all }
        end
      end

      def show
        render json: @link
      end

      private

      def set_link
        @link = Link.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def link_params
        params.require(:link).permit(:title, :href)
      end
    end
  end
end
