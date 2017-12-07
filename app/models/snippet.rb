class Snippet < ApplicationRecord
  belongs_to :user
  validates :description, length: { maximum: 258 }, presence: true

  delegate :email, :name, to: :user, prefix: :user

  def as_json(opt = {})
    super(only: [:id, :title, :description, :user_name, :user_email], methods: [:user_name, :user_email])
  end
end