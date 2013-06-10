get '/' do
  erb :index
end

get '/history' do
  @games = Game.all
  erb :_history, layout: false
end

post '/create_game' do
  game = Game.create
  p params
  player_1 = Player.find_or_create_by_name(params[:p1])
  player_2 = Player.find_or_create_by_name(params[:p2])
  game.players << player_1 
  game.players << player_2
  session[:current_game] = game.id
  erb :_game, locals: { game: game, player_1: player_1, player_2: player_2 }
end

post '/declare_winner' do
  
  session[:current_game].inspect
  winner = Game.find(session[:current_game].to_i)
  winner.winner_id = Player.find_by_name(params[:winner]).id
  winner.save
end
