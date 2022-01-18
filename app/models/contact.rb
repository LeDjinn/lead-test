class Contact < ApplicationRecord

    extend FriendlyId
    friendly_id :place, use: :slugged
end
