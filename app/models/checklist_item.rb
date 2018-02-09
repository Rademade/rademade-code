class ChecklistItem < ApplicationRecord
  belongs_to :checklist
  validates :title, presence: true
end
