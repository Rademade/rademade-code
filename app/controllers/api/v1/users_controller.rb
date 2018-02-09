module Api
  module V1
    class UsersController < ApplicationController
      before_action :authenticate_request, except: [:index, :show]
      def index
        @users = User.all
      end
      def show
        @user = user
      end
      def create
        unless current_user.is_admin?
          raise 'Not authourized'
        end
        @user = User.create!(user_params)
      end
      def update
        @user = user.update!(user_params)
      end
      def destroy
        user.destroy!
      end

      private
      def user
        User.find(params[:id])
      end
      def user_params
        params.require(:user).permit(:name, :email, :password)
      end
    end

  end
end


