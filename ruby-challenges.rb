# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.
# Method: Create a method that takes in an array of strings and a letter and creates a new array of words that contain the letter that was input. 
# def finder to take an array and use the method find_all to find all elements in the array that contains the the letter provided by the variable. Use the include? method to help filter whether or not the letter is present and return all the elements where .includes? = true.
# Input: array, letter
# Output: array of words 
beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

def finder (array,letter)
    array.find_all{|word| word.include? letter}
end 

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
# finder(beverages_array,letter_o)
# p finder(beverages_array,letter_o)
# p finder(beverages_array,letter_t)

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 
# Method: Create a method that will combine the two arrays and a single array without the hash. pass in a hash as the argument attach .values to extract the values and then use the flatten method to remove the secondary array. Return single state array. attach .sort to sort alphabetically. return final array. 
# Input: Hash
# Output: Array
def state_array (hash)
    p hash.values.flatten.sort
end

# state_array(us_states)
# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
class Bike 

attr_accessor :model, :wheels, :current_speed
    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def bike_info
        "The #{model} bike has #{wheels} wheels and is going #{current_speed} mph"
    end
    def pedal_faster (num)
        @current_speed = current_speed + num
    end
    def brake (num)
        if current_speed < num 
            @current_speed = 0
        elsif
        @current_speed = current_speed - num
        end
    end
end
my_bike = Bike.new('trek')
# p my_bike.bike_info
# p my_bike.pedal_faster(10)
# p my_bike.bike_info
p my_bike.pedal_faster(18)
p my_bike
p my_bike.pedal_faster(2)
p my_bike
p my_bike.pedal_faster(30)
p my_bike
p my_bike.brake(51)
# p my_bike.brake(5)
# p my_bike
# p my_bike.brake(18)
# p my_bike
# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
