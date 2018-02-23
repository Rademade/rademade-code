module Api
  module V1
    class ChecklistsController < ApplicationController
      # before_action :authenticate_request, except: [:index, :show, :update, :destroy]
      def index
        @checklists = Checklist.all
      end
      def show
        @checklist = checklist
      end
      def create
        @checklist = Checklist.create!(checklist_params)
        update_checklist_items
      end

      def update
        checklist.update!(checklist_params)
        update_checklist_items
      end

      def destroy
        checklist.destroy
      end

      private

      def checklist
        @checklist ||= Checklist.find(params[:id])
      end

      def checklist_params
        params.require(:checklist).permit(:title)
      end

      def update_checklist_items
        checklist_items = params[:checklist_items].map do |checklist_params|
          checklist_item = ChecklistItem.where(id: checklist_params[:id]).first || ChecklistItem.new
          checklist_item.title = checklist_params[:title]
          checklist_item
        end
        @checklist.checklist_items = checklist_items
      end
    end

  end
end

