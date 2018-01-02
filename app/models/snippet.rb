class Snippet < ApplicationRecord
  belongs_to :user
  validates :title, :sref, :description, length: { maximum: 258 }, presence: true

end