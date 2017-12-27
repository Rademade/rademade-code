class Snippet < ApplicationRecord
  belongs_to :user
  validates :description, length: { maximum: 258 }, presence: true

end