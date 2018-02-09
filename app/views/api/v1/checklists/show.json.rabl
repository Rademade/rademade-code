object @checklist

attributes :id, :title

child(:checklist_items) do
  extends '/api/v1/checklist_items/index'
end