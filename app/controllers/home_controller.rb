class HomeController < ApplicationController
  # Stripe.api_key=Rails.application.credentials.stripe[:secret_key]
  def index
    @page_title = "Accueil"
    @page_description = "Bienvenue sur le site de la communauté de l'informatique"
    @page_keywords = "informatique, communauté, site, communauté informatique, site communauté, site communauté informatique"
   
   
    # @customer_list = Stripe::Customer.list.data
  end

  def create
    @user = current_user
    @user.tokken = params[:tokken]
  end
end
