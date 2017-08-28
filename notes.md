Interactive Staging
git add -i
Add individual files to staging area for commit

Patch allows staging of individual file modifications (by hunks) so you don't have to stage (and eventually commit) an entire file if some parts are done but others are not.

Use either of the following commands to execute a patch add
	- `git add -p`
```
git add -i
Option 5
```

Stashing and Cleaning
- Cleans your directory and saves it so you can switch branches without committing code
- `git stash`
- Gets most recent stash and adds the changes to your current branch
- `git stash apply`
- `git stash apply --index` to try to automatically add the changes from the stash to be staged as well
- `git stash --save-index` will only stash unstaged changes
- `git stash branch <branch-name>` allows you to checkout the stash into a different branch to avoid conflicts on a file you may have modified in your current branch
