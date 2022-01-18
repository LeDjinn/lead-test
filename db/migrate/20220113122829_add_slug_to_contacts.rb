class AddSlugToContacts < ActiveRecord::Migration[6.1]
  def change
    add_column :contacts, :slug, :string
    add_index :contacts, :slug, unique: true
  end
end
