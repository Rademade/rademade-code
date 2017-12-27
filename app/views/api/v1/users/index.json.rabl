object @users

extends 'api/v1/users/show'

node(:first_snippet) do |user|
  partial 'api/v1/snippets/show', object: user.snippets.first
end