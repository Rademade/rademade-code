object @snippet

attributes :id, :title, :description

node(:user) do |snippet|
  {
      name: snippet.user.name,
      email: snippet.user.email
  }
end

#
# child(:user) do
#   attributes :name, :email
# end
#
#2
# child(:user) do
#   extends 'api/v1/users/small'
# end