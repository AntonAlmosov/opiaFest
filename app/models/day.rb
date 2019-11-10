class Day < ApplicationRecord
  default_scope { order(:created_at) }
  has_many :events
end
