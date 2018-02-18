class Link < ApplicationRecord
  validates :title, :href, presence: true
end
