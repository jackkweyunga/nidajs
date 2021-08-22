#!/bin/bash

echo "select type"

options=("major" "minor" "patch")

select opt in "${options[@]}"
do 
    case $opt in
        "major" )
            echo "running npm version major"
            npm version major
            echo "pushing to github"
            git push && git push --tags
            exit 0 #success
            ;;

        "minor" )
            echo "running npm version minor"
            npm version minor
            echo "pushing to github"
            git push && git push --tags
            exit 0 #success
            ;;

        "patch" )
            echo "running npm version patch"
            npm version patch
            echo "pushing to github"
            git push && git push --tags
            exit 0 #success
            ;;

        *) echo "Invalid option";;
    esac
done
