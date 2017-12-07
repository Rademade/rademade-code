class CreateSnippets < ActiveRecord::Migration[5.1]
  def change
    create_table :snippets do |t|
      t.string :title
      t.string :description
      t.string :sref
      t.integer :user_id

      t.timestamps
    end
  end
end
