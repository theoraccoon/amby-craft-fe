📌 **Summary**  
Briefly describe the purpose of this PR. What problem does it solve? Is it part of a larger feature?  
[TYPE] Brief one-liner (e.g., [FEATURE] Add responsive sidebar navigation)

🛠️ **Type of Change**  
Select or describe the type of change:

- [ ] Feature
- [ ] Bugfix
- [ ] Refactor
- [ ] Documentation
- [ ] Other: ****\_\_****

✅ **What's Changed**  
List the main changes. Bullet points are fine. Mention components, new logic, or tech decisions.

- Created `<CourseCard />` component using Tailwind
- Integrated with router to highlight active route
- Mobile-friendly collapse behavior using Headless UI
- Added unit tests for sidebar logic (Jest + Testing Library)

🧪 **How to Test**  
Describe how to test this manually. Add test cases or QA steps if needed.

- Run `npm start` and go to `/dashboard`
- Resize the browser to mobile view – menu should collapse
- Click on links – active route should highlight
- Run `npm test` – all sidebar tests should pass

🖼️ **Design References**  
Link Figma, screenshots, or Loom walkthroughs if applicable.

- Figma: Navigation Patterns
- ✅ Matches current design spec for v2.3

🔗 **Related Tickets / Issues**  
Link Asana issues this PR addresses.

- Asana: [Paste task link here]
- GitHub: Fixes #[issue-number]

📣 **Notes for Reviewers**  
Call out anything you'd like extra eyes on. Mention areas with trade-offs, tech debt, or pending discussions.

- Unsure if we should debounce the resize handler – thoughts?
- Keeping styles minimal – will revisit for polish after approval

🚨 **Checklist**  
Mark items when complete – helps reviewers know what’s done.

- [ ] Tested on all major browsers
- [ ] Mobile responsive
- [ ] Accessibility checked (focus states, keyboard nav)
- [ ] Unit tests written
- [ ] No console warnings/errors
- [ ] PR follows our coding standards / linters
