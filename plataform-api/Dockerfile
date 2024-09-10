# syntax=docker/dockerfile:1
FROM ubuntu:23.10
RUN apt-get update -qq && apt-get install -y postgresql-client wget xvfb unzip libtool tzdata ruby3.1 sqlite3 build-essential
RUN apt-get install -y libpq-dev libyaml-dev
RUN apt-get install -y ruby-dev
RUN gem install bundler 

WORKDIR /plataform-api
COPY Gemfile /plataform-api/Gemfile
RUN bundle install

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Configure the main process to run when running the image
CMD ["rails", "server", "-b", "0.0.0.0"]