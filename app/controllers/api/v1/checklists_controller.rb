module Api
  module V1
    class ChecklistsController < ApplicationController
      before_action :authenticate_request, except: [:index, :show]
      def index
        @checklists = Checklist.all
      end
      def show
        @checklist = checklist
      end
      def create
        @checklist = Checklist.create!(checklist_params)
      end

      def update
        checklist.update!(snippet_params)
      end

      def destroy
        checklist.destroy
      end

      private
      def checklist
        Checklist.find(params[:id])
      end
      def checklist_params
        params.require(:checklist).permit(:title)
      end
    end

  end
end

