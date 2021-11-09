class Buyers::Proposals::Errors::Section::Component < ApplicationComponent
  attr_accessor :section, :errors

  def render?
    errors.any?
  end
end
