class Checklist < ApplicationRecord
  has_many :checklist_items
  validates :title, presence: true
end
