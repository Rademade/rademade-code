module Api
  module V1
    class UsersController < ApplicationController
      skip_before_action  :authenticate_request, only: [:index, :show]

      # GET /users
      def index
        @users = User.all
      end

      # GET /users/1
      def show
        @user = find_user
      end

      # POST /users

      def create
        unless current_user.is_admin?
          raise 'Not authourized'
        end
        @user = User.new(user_params)

        if @user.save
          render json: @user, status: :created
        else
          render json: @user.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /users/1
      def update
        @user = find_user
        if @user.update(user_params)
          render json: @user
        else
          render json: @user.errors, status: :unprocessable_entity
        end
      end

      # DELETE /users/1
      def destroy
        find_user.destroy
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def find_user
        User.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def user_params
        params.require(:user).permit(:name, :email, :password)
      end
    end

  end
end


