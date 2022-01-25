module ApplicationHelper
  def sign(bool)
    bool === 'WXCVBN123'
  end

  def avatar?
    if current_user.avatar.nil?
      true
    else
      false
    end
  end
end
