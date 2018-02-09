class ApplicationController < ActionController::Base
  attr_reader :current_user

  around_action :wrap_in_try

  private

  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result
    render json: {error: 'Not Authorized'}, status: 401 unless @current_user
  end

  def wrap_in_try
    yield
  rescue ActiveRecord::RecordInvalid => e
    render json: e.message, status: :unprocessable_entity
  end

end