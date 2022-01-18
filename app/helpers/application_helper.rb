module ApplicationHelper
    def sign(bool)
       bool=== 'WXCVBN123' ? true : false

    end


    def avatar?
        if current_user.avatar == nil
          return true
        else
          return false
        end
      end
end
