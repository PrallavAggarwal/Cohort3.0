# Commands for bash/terminal :
1. cd : change directory.
2. ls : list files.
3. mkdir : make new directory.
4. touch : to make new file.
5. cat : to see the content of file.
6. mv : to move on file or folder to another folder. Syntax: mv file/folder_name destination_folder.
7. cp : to copy file/folder to another folder. Syntax: cp file/folder_name destination_folder
8. ls -l : to list details of files.
  - Details include : drwxr-xr-x : d for directory. These are permissions. These are three types of permissions seperated by '-' . Read-Write-Execute.
Permission can be given to User, group or staff.
    reference number, owner name, group owner name, size in bytes, 
9. ls directory_name/ : it will list all files/folder with in mentioned directory.
10. ls -l directory_name/ : it will list with all details.
11. ls -R directory_name/ : it will list all sub-directories of mentioned directory.
12. ls -lr directory_name : it will display files in reverse order of creation.
13. ls -s : display based on size.
14. ls *.js : It will list all files with .js extension.
15. ls file* : it will list all files with file in it.
16. cat > newfile.txt : It will let you add text to file.
17. cat >> newfile.txt : It will let you append text to file.
18. mv old_name.txt New_name.txt : We can also rename using mv.
19. cp -r file_from_one_folder destination_folder : It recursively copies file from one folder to previous folder.
20. rm -r folder_name_to_be_deleted : It deletes the folder.
21. chmod : to change permissions.
   r for read, w for write, x for execute. 
   u for user, g for group, o for others.
   '+' for adding permission, '-' for removing/revoking permission.
   if adding permissions for folder then use -R if not then no use.
   Now chmod takes two inputs : 1. first who you are giving permission u/g/o 2. Are you adding(+) or removing(-) permission 3. What kind of permission you are adding/removing i.e. r/w/x.
   Example : chmod u+x file_name :: In this user(u) has given(-) permission to execute(x) file.
   We can also represent permissions in numbers: 4 is for read, 2 is for write and 1 is for execute. 6(4+2) for read and write combine similarly others.
22. head text.txt : It will display first 10 rows of file.
  head -20 display first 20 rows.
  similarly tails text.txt.
23. echo 'hello' : it displays the message in terminal.
24. command1 | command2 : It is pipe operator. whatever comes from command1 goes to command2 .
25. wc file_name : It displays line count, word count and character count.
26. grep "one" file_name : It display the occurence of expression in file.
  grep "one" file_name | wc -l : It shows number of occurence.
  grep -c "one" file_name : It gives count of occurence.
  grep -h "one" file_name : It gives whole line in which expression occured.
  grep -hi "one" file_name : It ignores the case of expression.
  grep -hir "one" file_name : It gives expression occurence within the directory.
  grep -hin "one" file_name : It gives line number also.
  grep -hiw "one" file_name : To display one as whole word.

27. sed 's/pattern/replacement' log.txt : It replaces mentioned pattern with the replacement.
