class Checklist < ApplicationRecord
  has_many :checklist_items, dependent: :destroy
  validates :title, presence: true

end
