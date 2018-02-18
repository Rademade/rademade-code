module Api
  module V1
    class ChecklistItemsController < ApplicationController
      before_action :authenticate_request, except: [:index, :show]

      def index
        @checklist_items = checklist.checklist_items
      end

      def show
        @checklist_item = checklist_item
      end

      def create
        @checklist_item = ChecklistItem.create!(checklist_item_params)
      end

      def update
        checklist_item.update!(checklist_item_params)
      end

      def destroy
        checklist_item.destroy
      end

      private

      def checklist
        Checklist.find(params[:checklist_id])
      end

      def checklist_item
        ChecklistItem.find(params[:id])
      end

      def checklist_item_params
        params.require(:checklist_item).permit(:title, :checklist_id)
      end
    end

  end
end

