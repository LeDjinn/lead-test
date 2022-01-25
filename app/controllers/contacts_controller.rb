class ContactsController < ApplicationController
  before_action :set_contact, only: %i[show edit update destroy]

  def index
    @contacts = Contact.all
  end

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      redirect_to root_path, notice: 'Thank you for your message!'

    else
      render :new
    end
  end

  def show
    @contact = Contact.friendly.find(params[:id])
  end

  def edit; end

  def update
    @contact = Contact.friendly.find(params[:id])
    if @contact.update(contact_params)
      redirect_to root_path, notice: 'Thank you for your message!'
    else
      render :edit
    end
  end

  def destroy
    @contact = Contact.friendly.find(params[:id])
    @contact.destroy
    redirect_to root_path, notice: 'Your message has been deleted.'
  end

  private

  def set_contact
    @contact = Contact.friendly.find(params[:id])
  end

  def contact_params
    params.require(:contact).permit(:place, :title, :key_w)
  end
end
