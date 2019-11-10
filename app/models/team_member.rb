class TeamMember < ApplicationRecord
  default_scope { order(:created_at) }
  has_one_attached :picture 
end
