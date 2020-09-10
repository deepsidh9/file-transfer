# # import cv2
# # import os
# # import matplotlib.pyplot as plt
# # from PIL import Image
# # import numpy as np
# # import time

# # for picture in ['IMG-20190106-WA0022.jpg','IMG-20191214-WA0014.jpg']:
# #     pil_im = Image.open(picture) #Take jpg + png
# #     im_array = np.asarray(pil_im)
# #     plt.imshow(im_array)
# #     plt.show()
# #     time.sleep(3)
# #     plt.close()

# import tkinter as tk
# from PIL import ImageTk, Image

# window = tk.Tk()
# window.title("SEE image and ENTER its information")
# # window.geometry("600x400") # You can drop this line if you want.
# window.configure(background='grey')

# path = "IMG-20190106-WA0022.jpg"
# img = ImageTk.PhotoImage(Image.open(path))
# panel = tk.Label(window, image = img)

# txtVar = tk.StringVar(None)
# usrIn = tk.Entry(window, textvariable = txtVar, width = 90)
# usrIn.grid(row = 50, column = 60)

# usrIn.pack()
# panel.pack()
# window.mainloop()

# # import tkinter as tk
# # from PIL import ImageTk, Image

# # #This creates the main window of an application
# # window = tk.Tk()
# # window.title("SEE image and ENTER its information")
# # # window.geometry("600x400")
# # window.configure(background='grey')

# # #Creates a tkinter-compatible photo image.
# # path = "IMG-20190106-WA0022.jpg"
# # img = ImageTk.PhotoImage(Image.open(path))

# # #The Label widget is a standard tkinter widget used to display a text or image on the screen.
# # panel = tk.Label(window, image = img)

# # # Create textbox in window
# # text_widget = tk.Text(panel)
# # text_widget.insert('insert',"Enter image information here")
# # text_widget.pack(anchor = "w", padx = 50, pady = 50)


# # #The Pack geometry manager packs widgets in rows or columns.
# # #panel.pack(side = "bottom", fill = "both", expand = "no")
# # panel.pack()


# # #Start the GUI
# # window.mainloop()
import os
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
from shutil import copyfile
import sys

#define folders 
data_src = ""
one_label = "data/one_label"
two_label = "data/two_label"
three_label = "data/three_label"

extensionsToCheck = ['jpg', 'png']

# listing = os.listdir()
# print("src file subdirectories: ", listing)
listing=[name for name in os.listdir() if name.startswith("I")]
listing.sort(key=lambda x: os.stat(x).st_ctime)
def userInput( file_name):
    user_input = input()
    if(user_input!='exit'):
        return {"image_path":file_name,"image_caption":user_input}
        
#     if(user_input=='1'):
#         print("don't care")
# #         copyfile(data_src+file_name, one_label+'/'+file_name)
#         print("here")
#     elif(user_input=='2'):
#         print("neutral")
# #         copyfile(data_src+file_name, two_label+'/'+file_name)
#     elif(user_input=='3'):
#         print("like")
# #         copyfile(data_src+file_name, three_label+'/'+file_name)
#     elif(user_input=="e"):
#         print("exit")
#         os._exit(0)
    else:
        return  0  

def main():
    print("size of dir is: ", len(listing))
    information=[]
    for file in listing:
        print("file: ", file)
        if any(ext in file for ext in extensionsToCheck):
            plt.figure(file)
            img=plt.imread(file)
            imgplot = plt.imshow(img)
            plt.title(file)
            #I disabled the 2 lines below because you viewing the image in full screen will prevent you from accessing the terminal to enter the classification number
            # mng = plt.get_current_fig_manager()
            # mng.full_screen_toggle()

            plt.ion()  #Turn the interactive mode on.
            plt.show()
            plt.pause(0.001) #Pause for interval seconds.
            user_input = userInput(file)
            information.append(user_input)
            print(information)
            plt.close()


if __name__ == '__main__':main()