class AdminController < ApplicationController

    def index
        @users=User.all
        @comments=Comment.all
        @notifications = Notification.all
        @notifications_valid = Notification.where(read: false)
        @answer= Answer.new
    end
end
