#Generates time table by 30 minutes, adjust is possible by changing each variants 
import datetime

start_time = datetime.datetime(100, 1, 1, 9, 0, 0)
end_time = datetime.datetime(100, 1, 1, 22, 30)

current_time = start_time
add_time = datetime.timedelta(minutes=30)

with open("tools/timeTable.txt", mode="w") as f:

    while current_time != end_time :
        f.write(current_time.time().strftime("\"%H:%M\",\n"))
        current_time += add_time
