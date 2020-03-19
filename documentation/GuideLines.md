# DRAFT
This is a draft of the proposed code standards and best practices for the Mission Control Project going forward to help facilitate a productive cross-team workflow to a unified standard. The plan is to use this standard to outline the workflow milestones for the more long term restructuring of some components needed to fulfill the vision of Mission Control envisioned by the stakeholder.

# GitFlow - Git pull requests practices and standards
### Create a branch
* Pull down from Master to your local machine. This will assure that you have the latest and greatest from the repo!
```
git pull master
```
* Create/checkout a local feature branch. Once you have the master locally, create a branch of your feature.
```
git checkout -b feature/"YOUR-FEATURE-NAME"
```

### Work Flow
* Be mindful of GitHub updates and announcements posted to the Slack channel.
* Strive to keep individual contributions under 500 changed lines. 
* Update Draft Pull Request description to include a detailed description of the new feature or bug fix is added.
* Provide relevant in code comments to clarify changes when needed 
* Update appropriate ```Readme.md```
* Update QA Feature Checklist to reflect changes
* Update master Trello for PRs
 ### Things to do before taking pull request out of draft:
* Remove any commented out code.
* Remove any console logs.
* Pull master into your branch and resolve git conflicts
```
git pull origin master
```
* Let your TL know your taking this out of draft.

### Pull Reqest Review
* 2 reviews are required to merge code to master. (One revew must be by a TL)
* Any code, regardless of functionality, that fails: QA, or TL review, or style rules will be rejected, to allow the needed changes to be made.

# 
# QA Flow
* Maintain a list of current app features so a reviewer knows what functionality to check for.
### Review
* Download the branch and test localy that all features work. Remeber to update the Prisma data and seed:
```
npm run reseed
```
will run
```
prisma delete
prisma generate
prisma deploy
```
* If avalible, test on staging enviroment.
* Check all current and new features work fully prior to merging to master.
* Per Rejected Pull Request & Feedback Flow leave aproprate coments.

# 
# Rejected Pull Request & Feedback Flow
* GitHub comments should be code-centric and professional at all times.
* If rejecting a pull request for the failure of QA or not following Code Standards, the specific error should be referenced in that rejection so the developer can correct it and resubmit.
* If a developer is seeking an exception to a more arbitrary code style standard; when responding to the comments or decline of the pull request the developer should explain why the exception is needed in this case.
* It is best practice to submit the pull request outlining these exceptions so the reviewer can take them into account while doing the first review.
* If code is rejected for being more than 150 lines in a component, the reviewer should reference what lines of code could become a sub-component.
* **This is not a punitive PASS/FAIL** it is a form of communication to make sure code merged to master is justified and productive for the whole team at all times.

# 
# Code Clarity Best Practices
* Maintain a set of sample code for best practices.
* All developers on Mission Control should have prettier installed, and make use of the included ```.prettierrc.json``` standards.
* All other reformat on save tools should be turned off while working on Mission Control.
* The name of Components, variables, state, etcetera should be self-explanatory.
### Example 
Make a Component that will render a list of cat breeds.
#### Bad Naming
```
index.js == list of cat breeds
```
```
List.js == list of cat breeds
```
#### Good Naming
```
Cat + Breed + List == CatBreedList.js == list of cat breeds
```
* Component more than 150 lines of code should be challenged. (See Rejected Pull Request & Feedback Flow)
* Every line of code changed should be to the end of adding new funtinality.


### Example 
Every line of code changed should be about adding to the code, and idealy not just reformating the code.
#### Original Code
```
  useEffect(() => {
    if (cat) {
      setCat(cat);
    }
  }, [result.data]);
```
#### Bad Change
```
	useEffect(
		() => {
			if (cat && codependant) {
				setCat(cat);
			}
		},
		[ cat && codependant ]
	);
```
#### Good Change
```
  useEffect(() => {
    if (cat && codependant) {
      setCat(cat);
    }
  }, [cat && codependant]);
```
In most cases how code is formated can be arbitrary, but changes that are solely about respacing code should be avoided to prevent unneeded git conflicts. The exception is when converting legacy code to agreed to standards. This will help reviewers and your fellow developers see the lines of code you changed rather than need to sort through many lines of reformated code and risk overlooking your contributions.


## Sass Tree Best Practices
* import ```App.scss``` to ```App.js```
```
import './App.scss';
```
* import component styles in a ```Component.scss``` named after that component to ```App.scss```.
```
@import 'Component';
@import 'Component2';
```
* wrap the parent component top of the tree in a ```<div className="parentComponentContainer">```.
```
.parentComponentContainer {
  div {
    
  }
}
```
* [SASS Documentation](https://sass-lang.com/)

## Component Tree
### New Tree:
```
src >
    components >
        ComponenetName.js
        ComponenetName.scss
        ComponenetName.test.js
        ComponenetName >
            SubComponentName.js
            SubComponentName.test.js
            SubComponenetName >
```
### Old Component Tree
```
src >
    components >
        ComponenetName >
            index.js
            ComponenetName.module.scss
            SubComponenetName >
                index.js
                SubComponenetName.module.scss
```
* This change is to address many compopnets being named ```index.jsx```
* And based on the Orgnisation > Program > PRoduct > Project causeing old sub components to now be shared Components.

## Query Tree
* One Query per Component Tree
