module Api
  module V1
    class TodosController < ApplicationController
      before_action :authenticate_request
      def index
        @todos = Todo.all
      end
      def show
        @todo = todo
      end
      def create
        @todo = Todo.create!(todo_params)
      end

      def update
        todo.update!(todo_params)
      end

      def destroy
        todo.destroy
      end

      private
      def todo
        Todo.find(params[:id])
      end
      def todo_params
        params.require(:todo).permit(:title, :href)
      end
    end

  end
end

