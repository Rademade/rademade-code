class User < ApplicationRecord
  has_many :snippets
  has_secure_password
  validates :email, :name, presence: true

  def as_json(opt = {})
    super(only: [:id, :name, :email])
  end

end
