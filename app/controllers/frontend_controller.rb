class FrontendController < ApplicationController
  layout 'frontend'

  skip_before_action  :authenticate_request, only: [:index]
  def index

  end

end
