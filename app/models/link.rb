class Link < ApplicationRecord
  validates :title, :href, presence: true

  def as_json(opt = {})
    super(only: [:title, :href])
  end
end
