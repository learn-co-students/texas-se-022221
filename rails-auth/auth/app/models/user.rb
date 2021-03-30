class User < ApplicationRecord
    has_secure_password
    validates :email, uniqueness: true
end

# "$2a$12$Vn8cMy/G7mGAuHzNHuAZIOp4XHaEWRYV780TU/OdpuDQVtA.CtW9K"     "password"