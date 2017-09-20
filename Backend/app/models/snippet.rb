class Snippet < ApplicationRecord
  belongs_to :user
  validates :description, length: { maximum: 258 },
            presence: true

  def as_json(opt = {})
    super(only: [:id, :title, :description, :user_id[name]])
  end
end