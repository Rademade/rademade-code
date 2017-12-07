module Api
  module V1
    class UsersController < ApplicationController
      skip_before_action  :authenticate_request, only: [:index, :show]
      before_action :set_user, only: [:show, :update, :destroy]

      # GET /users
      def index
        respond_to do |users|
          users.json { render json:  User.all }
        end
      end

      # GET /users/1
      def show
        render json: @user
      end

      # POST /users

      def create

        @user = User.new(user_params)

        if @user.save
          render json: @user, status: :created
        else
          render json: @user.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /users/1
      def update
        if @user.update(user_params)
          render json: @user
        else
          render json: @user.errors, status: :unprocessable_entity
        end
      end

      # DELETE /users/1
      def destroy
        @user.destroy
      end

      private


      # Use callbacks to share common setup or constraints between actions.
      def set_user
        @user = User.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def user_params
        params.require(:user).permit(:name, :email)
      end
    end

  end
end


