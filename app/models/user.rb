class User < ApplicationRecord
  has_many :snippets
  has_secure_password
  validates :email, :name, presence: true
end
