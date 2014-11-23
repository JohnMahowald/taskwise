user1 = User.create!(email: 'john@me.com', password: 'johnjohn')

board1 = user1.boards.create!(title: 'Workout')

list1 = board1.lists.create!(title: 'Todo')
list2 = board1.lists.create!(title: 'Doing')
list3 = board1.lists.create!(title: 'Done')

list1.cards.create!(title: 'Squats', description: 'feel the burn')
list1.cards.create!(title: 'Pushups', description: 'ooh ouch')
list1.cards.create!(title: 'Situps', description: 'ouchy')

list2.cards.create!(title: 'Pullups', description: 'feel the burn')
list2.cards.create!(title: 'Push Press', description: 'ooh ouch')
list2.cards.create!(title: 'Clean & Jerk', description: 'ouchy')

list3.cards.create!(title: 'Power Cleans', description: 'feel the burn')
list3.cards.create!(title: 'L Hangs', description: 'ooh ouch')
list3.cards.create!(title: 'Jumping Jacks', description: 'ouchy')

board2 = user1.boards.create!(title: "Jamaica")

list4 = board2.lists.create!(title: "Visit")
list5 = board2.lists.create!(title: "Eat")
list6 = board2.lists.create!(title: "Listen")

list4.cards.create!(title: 'Kingston', description: 'feel the burn')
list4.cards.create!(title: 'Montego Bay', description: 'ooh ouch')
list4.cards.create!(title: 'Annotto Bay', description: 'ouchy')

list5.cards.create!(title: 'Guava', description: 'feel the burn')
list5.cards.create!(title: 'Jackfruit', description: 'ooh ouch')
list5.cards.create!(title: 'Pineapple', description: 'ouchy')

list6.cards.create!(title: 'Reggae', description: 'feel the burn')