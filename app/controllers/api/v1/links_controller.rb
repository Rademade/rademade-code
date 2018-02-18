module Api
  module V1
    class LinksController < ApplicationController
      before_action :authenticate_request, except: [:index, :show]
      def index
        @links = Link.all
      end
      def show
        @link = link
      end
      def create
        @link = Link.create!(link_params)
      end

      def update
        link.update!(link_params)
      end

      def destroy
        link.destroy
      end

      private
      def link
        Link.find(params[:id])
      end
      def link_params
        params.require(:link).permit(:title, :href)
      end
    end

  end
end

