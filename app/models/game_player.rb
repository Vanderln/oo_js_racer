class GamePlayer < ActiveRecord::Base
  validate :player_count

  belongs_to :game
  belongs_to :player

  def player_count
    if GamePlayer.where(game_id: self.game_id).count > 2
      self.errors.add(base: "Too many players in this game")
    end
  end
end
