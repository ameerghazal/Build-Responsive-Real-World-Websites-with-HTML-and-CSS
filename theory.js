/*

    SECTION 1: Introduction 

    First Webpage 
    - Exclamation mark with a tab creates a skeleton website structure.
    - h1 stands for heading 1, h2 smaller, ..., hn.
    - p stands for paragraph.
    - Do the edits in the body element.
    - Use the greater than less than symbols: <p>Data and close it with the right.</p>
    
    __________________________________________________________________

    SECTION 2: HTML Fundamentals

    Introduction to HTML
    - HTML: Hyper Text Markup Langauge
    - Used to describe something.
    - Consists of elements that describe things: paragrpahs, links, headings, etc.
    - HTML element is made of three things:
      - Opening tag: name of the element wrapped in <> (<p>)
      - Content: content of the element. It can contain an element in a element (for example, a div)
      - Closing tag: same as the opening tag but with a / (</p>)
      - For elements, such as an img element, they do not contain content, and we can omit the closing tag.

  
      HTML Document Structure
      - <!DOCTYPE html> tells the browser that the doc uses html. This is the first thing we must declare.
      - This is followed by <html></html> an html element
      - From there, imbedded into the html tag is a head element and a body element.
      - <head></head> contains things that are not visible in the browser. For example, link to style sheets, page title, etc.
      - <body></body> contains things that are always visible on the page. For example, paragraph, h1, etc.
      - indentation is important for properly reading html.
      - We alawys need to start with the doctype, followed by the html element, which includes the head and body tags.

      Text Elements
      - We can go all the way from h1 to h6. They all stand for heading. Lots of times, only one h1 is used.
      - All headings use the same element structure <hn></hn> where n ranges from 1 to 6. We can use multiple heading of the same size, but h1 should only be used once.
      - Comments use a <! -- ... --> structure, but simply ctrl slash does the job as well.
      - Paragraph element is the <p> element, which typically uses words.
      - Wrapping words in a <b></b> element bolds words. However, b is an old html elemnt. Instead, use the strong element, which makes it an important element to stand out: <strong> ... </strong>
      - <strong></strong> element bolds words. 
      - Wrapping words in a <i></i> element italizes words. However, this is outdated. Now, we should use the em element, which empasizes text.
      - <em> ... </em> element italizes words.

      More Text Elements: Lists
      - list of bullet points, ordered lists, etc.
      - Numbered List: <ol> </ol> this stands for an ordered list. Inside the ol, we need to create an <li> element, which stands for list item.
      - <li> </li> element refers to a list item.
      - <ol> </ol> creates a numbered list.
      - A container of another element is the parent, and the elements inside of the list, for example, are the child elements. 
      - Bullet list: for this type of list, we use the <ul> </ul> element, which stands for an unorded list. We still need indiviual <li> element for each list item.
      - <ul> </ul> creates an unordred list.
      - Lists are very important in html.
      - Needs to follow a structure.

      Images and Attributes
      - <img> element is a special element. It does not hold and content, so we do not need a closing tag.
      - We use an attribute for images. In this case we use the source attribute, which stands for "src"
      - Instead, use <img src="..." />
      - Note, if something is imbedded into a folder, vs needs to access that folder. For example, the image was in the starter folder, so the img element tag would be:
      - Besides the src, there are other attributes. One important one for images is the alt attribute.
      - alt="" let's the source image have a description.
      - <img src="starter/post-img.jpg" alt="HTML code on a screen." />
      - We can also specify the width and height attributes: w
      - width="" & height =""
      -ex: <img src="starter/post-img.jpg" alt="HTML code on a screen."
        width="500" height="200"/>
      - in the <html tag, specify the language. In this case, <html lang="en"> would be correct. Other languages have other codes. 
      - In the head tag, specify the character set attribute with:
          <meta charset="UTF-8" />, since it describes the page.

      
      Hyperlinks
      - Every single website on the internet has its own url.
      - Hyperlinks are used with anchor element; in short, <a></a>
      - Inside the opening tag, we use the href attribute to set the url.
      - Inside the content space, we display what would be shown on the screen.
      - Closing tags are needed.
      - Also, we can nest elements inside on another. For example, we can open a paragraph element, start it, add in an anchor, then continue and finish the paragraph.
      ex: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
          MDN Web Docs</a>
      - To open in a new tab rather than move away, add the target="_blank" attribute after the href.
      - We can also link another html file. In doing so, we simply specify that html file in our href (e.g. href="index.html"). 
      - Doing this is cool because we can specify the way back as well.
      - href property is the real deal to making it a link.
      - If we do not want the link to point anywhere, use the "#" inside of the href element.
      ex: <a href="#">Challenges</a>


      Structuring out Page
      - Container elements group elements together.
      - <nav></nav> elements groups elements together makes it much more helpful. 
      - <header></header> is the top part of the web document, or a smaller unit. This is also good for telling the browser and grouping elements.
      - <article></article> is good for grouping atricle information.
      - So now, our body only has two direct elements: a header and an article.
      - <footer></footer> is the content that comes at the very end of a page. For example, a copyright tag.
      - HTML entites can create minor logos, etc.
      - Use the & symbol followed by the tag name. For example, &copy; creates a copyright symbol.


      A note on Semantic HTML
      - Certain elements have a meaning or a purpose attached to them. Instead of thinking how it looks on the page, we should think of the meaning of it.
      - For example, using the bold element vs. the strong element. One has meaning, while one does not.
      - div stands for a box without any meaning. However, we should use a nav instead when wanting to use an acutal navigation.
      - <div></div> can really be used for anything. Navigation, paragraphs, etc. They take more space, though. 
      - The main idea, though, is to use sematic html to give our elements meanin.
      - This is better for search engine optimatzation. Also, it is better for accessibility. 
      - <aside></aside> element that contains extra seperate info.
      - <article></article> element can be used for any type of article.
      - check the resources page of html entity reference.
      - <button></button> creates a button.

    _____________________________________________________________________

      SECTION 3 CSS FUNDAMENTALS

      Introduction into CSS
      - CSS: Cascading Style Sheets
      - Visual style presentation of the content written in css.
      - Consists of countless properties that developers use to format the content.
      - Starts with a selector, followed by declerations (property: value), which all of the make up the decleration block. 
      - This is all called a CSS Rule.
      ex: h1 (selector) {font-size:24px (prop, value, decleration)} (block)


      Inline, Internal, and External CSS
      - Inline CSS: writing the CSS inside the element. 
      ex: <h1 style="color: blue">📘 The Code Magazine</h1>
        - However, inline styles should usually never be used.
      - Internal CSS: We go to the <head></head> element and open a <style></style> element. From there, we declare and define what we want to style with normal css. 
        - However, if we have a lot of CSS code, internal CSS is not practical.
      - External CSS: putting all the CSS code into its own file.
        - HTML files and CSS files do not automatically link, we need to link them. 
        - We can link a stylesheet with the <link> element in the <head></head> 
        - Use the href attribute to link the stylesheet and define the rel attriubute to tell the browser that it is a stylesheet.
        ex: <link href="style.css" rel="stylesheet" />
        - <link ... /> is an element for atttaching css styles mainly.


        Styling Text
        - font-size: ... can be specified with pixels, rem, uv, etc.
        - font-family: specifes different fonts for text.
        - text-transform: ... we control the font (e.g. lowercase, uppercase, etc.)
        - font-style: ... the style of the font (e.g. italic, bold, etc.)
        - Just because the h1 is the main heading of the page, does not mean it needs to be the biggest one.
        - By selecting, for example, the p element. We select all the p elements on the page. If there are 14 p elements, we apply the CSS to all 14 (assuming no classes or id's are invloved)
        - line-height: (number). All it is is the number times the font-size. This changes the spacing between the lines.
        ex:   line-height: 1.5; (it auto sets to 1)
        - Inheritance is when the parent has a style and the child does not override it.
        - text-align: ... (properties) aligns the text in the parent container (e.g. center, will center it)
        - We do not style the <ol></ol> elements or the <ul></ul> elements. We only style the li elements
        -* Default font-size is 16px which is 1rem.

        Combining Selectors
        - We can select multiple selectors to apply the same CSS style by using a comma. 
        ex: h1, h2, h3 {
          font-family: sans-serif;
          color: blue;
        }
        - Wrapping stuff into other elements then applying the style will find the parent and be override by the child if applicable.
        - List selector: combines mutliple selectors(h1, p, etc.)
        - For example, if we have a footer element, and inside the footer element we have other elements, such as a paragraph, anchor, etc. With proper CSS, we can acess the footer and then style its paragraph
        - footer p {
          ....
        }
        - This selector will select all paragraphs that are children of the footers.
        - Descendent selector is what it is called. 
        - We can use a nested descendent selector by, for example, article header p {}


        Class and ID Selectors
        - The problem with descendent selectors is they mess with the HTMl structure. This is where id's come into play.
        - When specifing with an id attribute, we name it something, and use the hash selector in CSS.
        - e.g (<p id="author">) (#author {})
        - with ID's in CSS, we use #idName (so, for the example, above, #author {})
        - CSS uses comments as-well with the same format as JS.
       ex: 
       #author {
          font-style: italic;
          font-size: 18px;
        }
        - Another way of labeling elements is through class attributes. 
        - ID's are not repeatable; therefore, if the id "author" is given to an element, it cannot be reused for a seperate element.
        - If we need to reuse a name multiple times, we need to use classes.
        - CSS convention: for multiple words in classes or id's, use dashs or underscores. 
        - ex: <p class="related-author">
        - For classes, we use the dot notation in css (.related-author)
        - We can reuse classes towards mutliple elements.
        - font-weight: ..., can make text bold.
        - list-style: none; removes styles from css lists (for example, bullet points from a ul element.)
        - all we do for id's and classes is use the attribute followed by a name. From there, we go to CSS using the dot or hash notation and apply styles.
        - ID's are only used once, classes can be used multiple times; however, classes are simply better to use for future notices.
        - we can use more than one class at the same time for one element; seperate them with an actual space. 
        ex: <p class="opium city"></p> in CSS we can apply styles to .opium and .city.


        Working with Colors
        - The RBG model: every color consists of Red, Green, and Blue.
        - In order to represent a certain color, we need to give each of the base colors a value between 0 and 255 (0 red, 0 green, 0 blue)
        - For max red, (255 red, 0 green, 0 blue) and the same goes for blue & green.
        - In white, all the colors are at the max of 255, and for black, all the colors are at 0.
        - From there, there are many combinations that can be put together.
        - Defining colors in CSS: RGB / RGBA notation, Hexadecimal notation.
          - RGB: rgb(0, 0, 0) and from here, we can edit the red, green, blue for a color.
          - RBGA: rgb with transparncy ("alpha") rgba(0, 255, 255, 0.3) 
          - important to know what these numbers mean.
          - Hexadecimal notation: instead of using a scale from 0-255, we go from 0 to ff (255 in hexadecimal numbers).
          - Notation: #00ffff (hash, value for red green and blue)
          - Shorthand notation: when all colors are identical pairs (#0ff).
        - In practice, we use the hexadecimal, and if we need transparacy, we use the rgba. 
        - When all colors in all 3 channels are the same, we get a grey color.
        - The higher the three numbers get and closer to 255, the grey is lighter and vice versa.
        ex: color: rgba(50, 192, 38, 0.801); using the color property in css.
        - In CSS, we two of the same definitons (e.g. color property is chosen twice for the same class), the later one is used.
        - background-color: ..., changes the color of the selected background.
        - element selector: selects all with the same element
        - border: ..., accepts multiple properties
          - border creates a box around the box. 
          - We could indiuvally style the  border width, border-style, and border-color properties. Otherwise, with border we can do it all at once.
          ex: border: 5px solid #1098ad;
        - Do not forget about pre-designed color names. 



        Pseudo-classes
        - font-weight: bold ... makes text bold.
        - colon notation: we go to element and use the colon notation to use specific properties. 
        - For example, the first-child selector will look through the element and target the specific first-child element.
        - There are multiple selectors within the pseudo code classes.
        - n-thchild(number) find the specific one. Or we can use key-words, such as odd, even, etc.
        ex: li:nth-child(even) {
               color: red;
            }
        - descendent does not work properly in this case. So, article p:first-child, for example, does not work unless a paragraph is the first-child of the ARTICLE.
        - mixing multiple elements inside of a parent element make pseduo classes not feasible. 


        Styling Hyperlinks
        - Simply selecting the anchor is not a good practice. It is better specify by pseudo.
        - a:link {} targets an anchor element with an href. 
        - text-decoration: none; removes the underline style under links (we can edit this to however we want.)
        - a:visted {} deals with when links have been seen.
        - a:hover {} deals with when a mouse hovers over a link.
        - text-decoration, similar to border, can define the text-decoration-line, text-decoration-style, and text-decoration-color in one go. For example, text-decoration: underline dotted orangered;
        - a:active {} is a pseudo class that occurs when the link is actually cliked. 
        - These four states must be defined in this exact order (LVHA): link, visited, hover, active.

        DevTools
        - some elements have default styles, such as h1.
        - we can also edit inside the browser.
        - On the styles tab, by clicking the :hov, we can an element being hovered, visited, etc.
        - This is great for testing the webpage without messing with the acutal code. 
        - Anything saved in the browser does not save in the actual code. 



        CSS Theory #1: Conflicting between Selectors
        - If there are multiple selectors, which one applies?
        - First up, decleration marked with !important, but they should only be used with need.
        - Next up, inline styles have the 2nd highest; however, they should not be used regardless.
        - Third priority is the ID selector, but if there are multiple, it is the last selector in the code. 
        - Fourth up, is a class (.) or a pseudo-class selector (:) and if there are multiple, it is the last one of them.
        - Fifth, is the element selector (p, div, li, etc.) and if multiple, it is the last one in the code. 
        - Lastly, the universal selector selects everything, but it holds the least weight. 
        - So for a conflciting property, look above to see which one applies. If we have multiple with the same style, look above. 
        - A class can have the same name as an id.
        *- we can add multiple classes to an element by a simple space, etc.
        e.g. <p class="copyright test"></p>
        - hovering over it in VS code will tell us the selector specificity. 
        - !important is a hack for overriding everything else. 


        CSS Theory #2: Inheritance and the Universal Selector
        - Inheritance is a mechanism by which some styles get their properties from parent elements and child elements. 
        - An inherited property have the lowest priorty and can easily be overriden. 
        - For example, if we declare a color in the body (such as red), and from there, we overriden it in a element tag, it gets overriden.
        - This is not conflicting selector, these declare values and get passed down to all the child elements contianed in the body. If they get overridden, so be it.
        - Not everything gets inherited; for example, adding a border to the body. 
        - Most text things get inherited, but not all properties. 
        - Big lists are online. 
        - We can select more than one class or selector in CSS with a comma seperator: .c1, .c2 {} to apply the style to both elements contains the classes. 
        - Universal Selector: * {} applies to all the elements on the page. No ineritance involved.


        CSS Theory #3: The CSS Box Model
        - The Box Model defines how things look on the page. Everything is in style of a box.
        - Content box: text, images, etc. (we can define the width and height)
        - Border box: a line around the element, still inside of the element
        - Padding: invisible space around the content, inside of the element.
        - Margin: space outside of the element, between elements on the page.
        - Padding is empty space inside of any element (between the content and the border), while margin is space in between elements.
        - All of these are actually optional. 
        - Fill Area: area that gets filled with background color or background image. If we apply a background image or color, it applies to the entire visible part of the image. 
        - Analogy: imagine a frame on the wall. Image is the content area, space between the content and the border is the padding, the frame is the border, and the space between other elements on the wall would be the margin. 
        - Height and width can be specified of the content area; however, they are not the final sizes of the element.
        - Final element width = left border + left padding + width + right padding + right border.
        - Final element height = top border + top padding + height + bottom padding + bottom border.
        - This is a default behavior, but we can change it if we want to.


        Margins and Padding
        - Spacing between the content and the border (outside of the element)
        - It is specififed as padding: ..px (we can do left, right, top, bottom, etc.)
        - We can use similar function but using padding: value (for top, bottom) value2 (left right)
        ex: padding: 20px 40px;
        - Margins: spacing between elements (mar)
        - Typically, the last list item should not contain a space. 
        - margin-bottom: 0; removes the margins from the bottom.
        - Similar to the padding, we can use margin (right, left, top, bottom, etc.)
        - margin does not get inherited from parent to child elements.
        - Use the universial selector for this. 
        - Global reset: * {margin: 0; padding: 0;}
        - Creating vertical space is common. Margin-bottom is nice. 
        - Margins add space from outside the element, while padding adds space within the element.
        - Collapsing margins: if two margins are specified, the larger one is usually displayed on the page. (e.g. if we have 100px from p and 50px from h3, only 100px from p is applied, since it works for both)
        - Vertical space: stick to margin bottom.


        Adding Dimensions
        - Using height and width, we can add dimensions to elements.
        - Width: horizontal
        - Height: vertical
        - According to the box model, the height and width are not fully real. Need to addition in the padding.
        - Better to specify width and height and CSS
        - Setting the height or weight to auto is only nessicary if the dimensions are set in HTML.
        - If we just set one in CSS, with none in HTML, the other property will automatically adapt.
        - Percentages are great for adapting images. 100% is the entire width of the page, etc.

        Centering our Page
        - <div></div> is a simple box.
        - div's are basically containers or frames.
        - So if a div wraps many things, the child elements cannot be larger than the parent container.
        - For example for the images. If the width is 100%, but the container's max width is 700px, the 100% is based off the 700px
        *- margin-left: auto, margin-right: auto, means that both the right and the left need to be centered as they will be the exact same size calculated by the browser.
        - This could also be written as margin: 0 auto;
        - cannot add margins to small elements, such as anchors.


        CSS Theory #4: Different types of boxes
        - Some boxes span what they need, while others span an overload.
        - Inline boxes: span exactly what they need.
            - Occupies only the space necessary for its content,
            - No line-breaks after or before the element.
            - box model applies in a different way: heights and widths do not apply.
            - paddings and margins only apply horizontally (left and right).
            - default elements: a, img, strong, em, button, etc.
            - CSS: display: inline
        - Block level boxes: span all the space that they can and create spaces in between. 
          - Formatted as blocks and occupy 100% of parent element's width, no matter the content. 
          - Statcked vertically by default, one after another. 
          - Box model applies earlier as showen. 
          - Default blocks: body, main, header, footer, section, nav, aside, div, h1-h6, p, ul, ol, li, etc.
          - CSS: display: block
        - Inline elements do not create any vertical space. To have them to do some, we would need to change the display to block.
        - Inline elements are side-by-side, while blocks take their own area.
        - Inline-block elements
            - display: inline-block
            - look like inline boxes from the outside, but they behave like block-level on the inside.
            - occupies only content's space.
            - No line-breaks.
            - Box-model applies normally. 
        - We can chain pseudo classes on pseudo classes (nav a:link:last-child)
        - For pure inline elements, we cannot use width and height. 


        CSS Theory #5: Absoulute Positioning
        - Normal flow: Default position, elements are laid out according to their order in html code (position: relative)
        - Absolute Positioning: element is removed from the normal flow. No impact on surrounding elements & might overlap them. We an use the top, bottom, left, or right to offset the element from its relativley positioned container
        (position: absolute)
        - Positioned in relation to the viewport.
        - The pixels should be in relation to some other parent element.
        - E.g., bottom, right: 50px and making the parent element with (position: relative
        - Finds the first parent element with the position set to relative. 
        - Abs. position element is placed (0, 50, ..) is depenedent on the first relativley positionied parebt. 
        - In other words, we can put any element whereever we want on the page, but it is not good to overuse it. 


        Pseudo-elements
        - Elements that do not exist in the html, but we can style in css.
        - For example, styling the first letter of a paragraph. 
        - Psedo classes use one colon (:), and pseudo elemebts use two colons (::)
        ex: h1::first-letter {
              font-style: normal;
              margin-right: 5px;
        }
        - Sibling elements are elements inside the same parent.
        - Adjacent element is the sibling that comes right after it.
        ex: h3 + p::first-line {
             color: red;
          }
        - the "+" selector is the ajacenet sibling selector. 
        - before and after pseduo elements create the element after the specified class.
        - content: "..." specifies the text-content in the created element
        - testing with top: 0, left: 0 is good for testing abs. positioning.
        - We can set negative values which will move the other way in direcion.
        -  top: -10px; right: -25px;
        - It will not appear in the html, but the css will create it either before or after.
        ex: 
              h2::after {
                content: "TOP";
                background-color: #ffe70e;
                color: #444;
                font-size: 16px;
                font-weight: bold;
                display: inline-block;
                padding: 5px 10px;
                position: absolute;
                top: -10px;
                right: -25px;
              }

        
        Developer Skills
        - Google is a friend. Stackoverflow, MDN, etc. are helpful.
        - When wanting to center small inline type of elements, use text-align: center in the parent container. 
        - text-align: sets the horizontal alignmnet of the content inside a block element of a table-cell block. (left, right, center, justify, etc. )

        Debugging HTML & CSS
        - For example, check where the styling issue occurs and go to that part in the html.
        - HTML validators are good for checking if the html is even valid or not. Copy the code and put it in a validator. 
        - diffchecker.com is where we can compare different html's. This is good for debugging as well.
        - Also, usually, the more complex selectors are the ones that get applied. This is why we should avoid complicated specifites. The higher the specificity number, the more likey to get applied. 
        - Debugger is good for identifying any type of issue. 
        - Up and down keys are good for experimenting with different values in the debugger. 
        - Putting code in a code pen is good for sharing code. 


        _______________________________________________________________________

        Section 4: Layouts (Floats, Flexbox, and CSS Grid Fundamentals)


        The 3 Ways of Building Layouts
        - Layout: the way that text, images, and other content is displayed and arranged on the page. 
        - Arrange page elements into a visual structure, instead of simply having them placed one after another (normal flow)
        - Page Layout: laying out the elements inside of a page.
          - These layout contain components, in which these components have their own layout.
        - Component Layouts: components themselves also have a layout. 
        - This is similar to Figma when using multiple frames within frames.
        - Float layouts: old way of building layouts of all sizes, using the float CSS property. (getting outdated)
        - FlexBox: modern way of laying out 1-dimensional row without using floats, which is perfect for componenet layout.
        - CSS Grid: for laying out element in a fully-fleged 2-d grid. Perfect for page layouts and complex components. 



        Floats
        - Typing "lorem" will create a bunch of fake text.
        - Using float: ... will float around the image. 
        - Using this layout removes it from the flow.
        - if the childs are all floated, it is as if the height of the parent is 0, due to the "empty" elements. 
        - float: left, float: right
        - Elements are removed from the normal flow. 
        - Text and inline elements will wrap around the floated elements, which is different from abs. positiong. 
        - The container will not adjust its height to the element. 


        Clearing floats
        - We can create an empty div element inside the header and clear the float by using the clear property. ("clear: both", or left, right)
        - Using empty div's, however, is not a good practice.
        - Another way is fo us to use a psuedo elements, select the header and set the display to block with an empty content and a clear property.
        - .clearfix::after {
            clear: both;
            content: "";
            display: block;
          }

          Building a Simple Float Layout
          - Float property makes it that the elements that come after it float around it, which makes them cofnusing.
          - For example, if we select a footer, but there is something after it, it will grab that element too.
          
          Box-sizing: border-box
          - Default box model adds the border and the padding on top of the width and height.
          - By adding box-sizing: border-box, it allows the final width and final height to simply equal the width and height, rather than adding in the padding and borders. 
          - The default behavior is 'content-box'.
          - Using this method makes the width and height stay true to the actual value.
          - Attach this property to the global reset and universial selector.



          Intro to Flexbox
          - To start with flex box, set the display property of the container to "display: flex".
          - The parent is the container and the childern are flex items. For example, a div with 6 children.
          - Horizontally, setting the display to flex makes each element take as much room as it needs. For example, a box with the text "amazing" will, horizontally, span the word.
          - Vertically, it is a different story. All the children are the same height as the tallest element within the flexbox display. 
          - Flexbox has a vertical alignment property. "align-items: center" we can also use  "flex-start" and "flex-end"
          - By default the align-items is set to "strech", meaning they strech as tall as the tallest element.
          - We can also center all the items horizontally in the flex-container by using (justify-content: center)
          - justify-content has also other nice properties (space-between), which spaces out the children at an equal spacing. 
          

          A Flexbox Overview
          - Flexbox: set of related CSS properties for building 1-dimensional layouts.
          - Makes it easy to align items to one another both horizontally and vertically in the parent container.
          - Flexbox solves common problems such as vertical centering and creating equal-height columns
          - Flexbox is perfect for replacing floating, allowing us to write fewer and cleaner code.
          - Terminology
            - Flex container: set the display property to flex (display: flex), and all the direct children of the parent will be flex-items.
            - Main axis is the horizontal axis, and Cross Axis is the vertical axis.
            - We can change these and line items up on either axis, so this is an important concept to grasp.
          - Flex Container Properties:
            - gap: ... creates space between items, without using margin.
            - justify-content:  .... align items along main axis (horizontal, by default).
            - align-items: ... align items along the cross axis (vertically, by default).
            - flex-direction: ... to define which is the main axis.
            - flex-wrap: ... to allow items to wrap into a new line if they are too large.
            - align-content: ... only applies when there are multiple lines (flex-wrap: wrap)
          - Flex Items Properties:
            - align-self: auto ..... overwrite align-items for indiviual flex-items
            - flex-grow: 0 (...) allow an element to grow (0 means no, 1... mean yes)
            - flex-shrink: 1 (...) allows an element to shrink (same as above)
            - flex-basis: auto (...) used to define an item's width, instead of the width property.
            - flex: 0 1 auto ... recommended shorthand for flex-grow, shrink, basis.
            - order: 0 ... contros the order of items to change them on the page rather than the src code.  (-1 first, 1 last)

        
          Spacing and Aligning Flex Items
          - Using align items will make is so all the items all the same alignment. To override this for a certain child, use align self.
          - strech makes it so it matches the biggest child. 
          - By default the order is 0 for all the elements. To move one of them to the first position, simply give it a number less than 0. To move it all the way to the back, use a number greater than 0.
          - Using order, we can create an order by (1,2,3, etc.)
          - The gap property is good for spacing and is applicable in the container. 
          

          The Flex Property
          - When setting a flex-basis, it is a reccomendation to the browser.
          - By default, flex-box is allowed to shrink the elements to fit the container. This is because flex-shrink is automatically set to 1.
          - If we can the flex-shrink to 0, it determines whether flex-box is allowed to shrink or not.
          - By setting flex-grow: 1 for one or all of the elements, the total space of the container will be filled up. By setting the same flex-grow to all, then all the children have the same size.
          - If the flex-grow is greater for one child than the others, then it will take up more space. 
          - Do not use basis, shrink, and grow explicity, use the flex: ... property.
          - The shorthand property is much better to use. (flex: grow shrink basis)

          
          Adding Flexbox to our Project
          - justfiy-content: space-between; takes all the space in between the elements spanning the container and splits it up equally.
          - Wrapping items in div's is very helpful in certain display flex alignment. It is basically using frames in Figma. Where, for example, there is a div containing a heading and paragraph and an outer div... 
          - Never forget, the link pseduo class is needed when styling links (link:link)
          - Vertical spacing, again, does not work for inline items. Need to display them as blocks
          - The issue with gap is not all browsers support it. 
          
          Building a simple flexbox layout
          - With flexbox, alot of times creating a new container / div is important to acheving a layout.
          
          Introduction to CSS Grid
          - By setting display: none, we remove it from the page.
          - In CSS grid, we have a grid container and grid items.
          - display: grid; on the container.
          - grid-template-columns: (number of columns with a width each), for example, grid-template-columns: 250px 150px (1st column is 250 px, 2nd is 150px)
          - grid-template-rows: .... (same as the columns, we can give the number of rows with an explict height)
          - AS many rows as created as nesecarry to adapt to the columns.
          - Elements and heights adapt to the max height. (default)
          - We can resize the columns and rows, however. 
          - To specify spacing, use gap: ... (we can specify row and column gaps aswell).
          - row-gap: ..px;
          - column-gap: ...px;

          CSS Grid Overview
          - Set of CSS properties for building 2-d layout.
          - Main idea is that we can divide a container element into rows and columns. 
          - Allows us to write less nested HTML and easier-to-read CSS.
          - Not meant to replace flexbox. For 1-d layouts, use flexbox, and for 2-d use grid. They work toghether.
          - Grid-container: set the display to grid, and inside the container are all the grid-items.
            - Column axis: vertical axis
            - Row axis: horizontal axis
            - We cannot interchange these rows like in flexbox. 
            - Grid-lines: seperate the columns and rows.
              - If we have 3 columns, we have 4 numbers. If we have 2 rows, we have 3 numbers. 
              - Each box features a grid-cell (may or may not be filled).
              - Gutters (gaps): spacing between columns and rows.
              - Grid-track: space taken up.
          - Grid-container properties: 
            - grid-template-rows: <track size>
            - grid-template-columns: <track size>
            - row-gap: ....; column-gap: ....; gap: ....;
            - justify-items: strech, center, ... (horizontal) 
            - align-items: start, end, ... (Vertical)
            - btw: different starting and end from flex-box!!!
            - justify-content: ..., align-content: ...; (aligns grid inside grid contaier, which only applies if the container is larger than the grid)
          - Grid-items properties:
            - grid-column: ...;
            - grid-row: ... (places a grid item in a specifc cell, based on line numbers) [span keyword can be used to span across more cells]
            - justify-self: ...;
            - align-self: ...; (used for a single item)


          Sizing Grid Columns and Rows
          - fr unit: stands for fractional / fraction.
          - Using this unit will attempt to resize rather than using a set pixel value. 
          - To set all the columns to the same width, set all of them to the same fr. To short the process, use the repeat() function.
          - grid-template-columns(rows): repeat(#ofcol/row, #fr)
          Ex: grid-template-columns: 5fr repeat(3, 1fr); [4 columns with one larger than the other 3]
          - We can use the auto keyword at the end, which will adapt to the amount of space remaining. 
          - For using fr unit in rows, we have to define a height for the container.
          - grid-template-rows: auto; will occupy the space it needs. 
          - Typically, we only need to use the template on columns. 


          Placing and Spanning Grid Items
          - We can specify where we want to put an element in the grid. For example, if we want to move an element into the 2nd column 1st row: 
          ex: grid-column: 2 / 3; " 2 to 3"
              grid-row: 1 / 2;
          - grid-column(row): column (row) / next column (row);
          - If the second value is just one greater, we can omit it (grid-column: 1 / 2 == grid-column: 1)
          - We can adjust the second value to span more than one column and strech the data. 
          ex: grid-column: 1 / span 3; == grid-column: 1 / 4;
          - Instead of manually spanning, we can use grid-column: 1 / -1 (which spans the entire column).
          - The grid-row works exactly the same.

          Aligning Grid Items and Tracks
          - If the grid is smaller than the grid container, we can align the tracks to distrubute the empty space. 
          - By using align and justify items, we can edit the items INSIDE Celling / moving items around inside cells. 
          - content properties: align tracks inside the container (if the container is bigger)
          - items propeties: are for inside the cells.
          - We can override items propeties by using the self properties. 

          Building a simple CSS Grid layout
          - By not defining the rows, we let css grid adapt. 
          

          ___________________________________________________________________


          SECTION 5: Web Design Rules and Framework
          

          Project Overview
          - <section></section>: it is a sematic section element, similar to an article. We could have used a div, but this is better for sections.
          - <span></span>: genric inline elements for texts. 
          - <blockquote></blockquote>: good for wrtiting a quote. 

          Overview of Web Design vs. Devlopment
          - Web deisgn: look and feel of website.
          - Web devlopers: implement the design using html, css, and JS.
          - Good design is very important.
          - Everyone can learn by following a framework/system.
          - Website ingredients: Typography, colors, images/illustrations, icons, shadowns, border-radius, white-space, visual hieraryc, user experience, components/layouts.
          - Serious/Elegant: thin serif typefaces, golden or pastel colors, ang big higi-quality images.
          - Minimalist/simple: essential text content, using small or meduim sized sans serif black text, lines, and few images and icons. 
          - Plain/Neatual: nrutral and small type faces.
          - Bold/Confident: big bold typography with confident colored blocks.
          - Calm/peaceful: calming pastel colors, soft serif heading, matching images
          - Startup/upbeat & Playful/fun are also others. 
          
          Web Design Rules #1: Typography
          - Making text readable.
          - Serif: minor details, such as tails which make them serif typefaces. They creare classical looks, convey trustworthiness, and are good for long text.
          - Sans-Serif: they do not have the serif tails. Modern look and feel. They look clean and simple. Easier to use for a beginner design.
          - Guidelines (1-14):
            - Only use good and popular typefaces: e.g. Sans-Serif (Inter, Roboto, and more) or e.g. Serif (Merriweather, Aleo, Lora, and more)
            - It is okay to use just one typeface per page. Limit it to 2.
            - Choose the right typeface according to the website personality. 
            - Font-sizes: limit choices and use a type scale tool or predefined range.
            - Use a font-size between 16px and 32px.
            - For a long-text formant (like a blog), try a size of 20px or even bigger.
            - For headlines, we can go really big (50+px) and bold (600+), depening on personality
            - For any text, do not go under 400 font-weight.
            - Use less than 75 character per line. 
            - For normal-sized text, use a line height between 1.5 and 2. For big text go below 1.5. (NOTE: THE SMALLER THE TEXT THE GREATER THE LINE HEIGHT)
            - Decrease letterspacing in headlines, if it looks unnatural.
            - Experient with all caps for short titles. Make them small and bold and increase letter-spacing. 
            - Don't justify text.
            - Don't center long text blocks. Small blocks are fine. 
          
            Implementing Typography
            - By going to google fonts, we can select multiple fonts and link them in the head of the html (before the style sheet).
            - We can edit the link that is loaded in by using, e.g, 500; 600, etc.
            font-family: 'Inter', sans-serif; // the first is with wifi, the next one is if something is not inhertied.
            - Font-size systems are very good. Using typescale.com for doing this.
            - For bigger texts, use line-heights under 1.4
            - Use similar spacing, size, etc. throguhout the page.
            

            Web Design Rules #2: Colors
            - Guidelines:
              - Make the main color match your website's personalility: colors convery meaning!
                - Red draws alot of attention, power, passion, and excitment.
                - Orange is less agressive with happiness, cheerfulness, and creativity
                - Yellow is joy, brightness, and intelliegence
                - Green is harmony, nature, growth, and health
                - Blue is peace, trustworthiness, and professionalism.
                - Purple conveys wealth, wisdom, and magic
                - Pink reperesents romance, care, and affection.
                - Brown is nature, durability, and comfort.
                - Black is power, elegance, and minimlaims, but also grief and sorrow.
              - Use a good color tone, not a css named color or a random tone. Use an open color tool. (tailwindcss, flat UI colors 2)
              - Need at least two colors in the color pallete: a main color and a grey color: (main and grey).
              - With more experince, we can add a secondary "accent" color: (Main, accent, gray). Tool like palleton.com is good for this.
              - Create lighter and darker versions (tints and shades) of the color palette. Tint and shade generators are good.
              - Use the main color to draw attention to the most important elements (e.g., for a button of the most important detail). 
              - Use clors to add interesting accents or make entire components or sections stand out.
              - Use color strategically in images and illustrations.
              - On dark colorbackgrounds, try to use a tint of the background ("lighter version") color for the text.
              - Text should not be completly black. Lighten it up.
              - Don't make the text too light. Use a tool to check contrast between text and background colors (e.g. Coolers.com).
              (CONTRAST RATION NEEDS TO BE AT LEAST 4.5:1 FOR NORMAL TEXT AND 3:1 FOR LARGE TEXT (18PX+)) 
            

            
          Implementing Colors
          - For links that lead somewhere, make sure to use the pseudo link and visted classes. (link, visited, hover, active)
          - Remember, for inline elements, vertical spacing is not created. We need to use inline-block
          - Common styles into one class, and then the different styles put them into variations (e.g. class="btn btn-tiny")
          - Use a color contrast checker.

          Web Design Rules #3: Images and Illustrations
          - Guidelines:
            - Different types of images: product photos, storytelling photos, illustrations, patterns
            - Use images to support the website;s message and story. Only use relevant images.
            - Prefer original images. if not possible, use original-looking stock images (not generic ones).
            - Try to show real people to trigger user's emotions.
            - Crop images to fit the message.
            - Combining photos, illustrations, and patterns
            - Method #1: Darker or brighten image (completly or partially, using a gradient)
            - Method #2: Position the text into a netural iamge area.
            - Method #3: Put text in a box with some opacity.
            - Account for high-res screens, make image dimensions 2x as big as their displayed size. Otherwise, it would be blurry.
            - Compress images for a lower file size and better performance.
            - When using multiple images side-by-side, make sure they have the exact same dimensions.
          - Good sites for images: Unsplash, pexels, drawkit, unDraw
          - Scale factor: actual pixels the screen contains / Pixels represented on the screen. For example,, on high-res screen, scale factor is 2x or 3x, on normal screens it is just 1x (1 phyicsal pixel = 1 design pixel)
          - Use Squoosh to compress images.
          
          Web Design Rules #4: Icons
          - Guidelines:
            - Use a good icon pack, there are tons of free and paid icons packs
            - Use only one icon pack; don't mix icons from different icon packs.
            - Use SVG icons or icon fonts. Don't use bitmap image formats (.jpg & .png). SVG icons are vector based which scale indefinitley.
            - Adjust icons to website personality. Roundness, weight, and filled/outlined depend on typography.
            - Use icons to provide visual assistance to text.
            - Use icons for product feature blocks.
            - Use icons associated with actions, and label them (unless no space or icon is 100% clear)
            - Use icons as bullet points.
            - To keep icons neutral, use same color text. To draw more attention, use a different color.
            - Don't confuse users: icons need to make sense and fit the text or action.
            - Don't make icons larger than what they were desinged for. If needed, enclose them in a shape. On the other hand, some icons were used to be for bigger detail.
          - Toolbox: Phosphor icons, ionicons, icons8, and many more.
          
          Implementing Icons
          - SVG icons are the best choice due to their scaling.
          - <svg></svg> normal element in html which features a path of the image.
          - Stoke: .... property is how to change the color of an image.
          - Fill: ... property is how to change the inner color of an image.
          - Some items are designed to be used in a certain setting.
          - By holding down alt, we can copy mutliple things. From there, we can hold down alt to paste the different things as well.


          Web Design Rules #5: Shadows
          - Guidelines: 
            - There is no need to use shadows. Only use them if applicable. Less shadows are more serious/elegant, while more shadowns are playful/fun.
            - Use shadows in small doses: don't add shadows to every element.
            - Go light on shadows, don't make them too dark! 
            - Use small shadows for smaller elements that should stand out / to draw attention to them.
            - Use medium-sized shadows for larger areas that should stands out a little bit more. Big descrptions or cards.
            - Use large shadows for elements that should really float above the interface. For example, a modal window.
            - Experiment with chagning shadows on mouse interaction (click and hover; For example, the bookmarks in forkify)
            - Bounus: colored shadows, which are called glows.
          - Shadows create depth (3D). The more shadow, the further away from the interface. Distance from the screen is increases/decreases the shadow.
          

        Imlementing Shadows
        - box-shadow: (horizontal)px (vertical)px (blur)px (scale-optional)px (color)
        ex:   box-shadow: 0 20px 30px 0px rgba(0, 0, 0, 0.07);
        - text-shadow: uses the same as box without the 4th property.
        - Good to check this on mdm. 
        - Typically, we set the horizontal offset (first property) to 0 to avoid directional.
        - <figure></figure> used for cards.


        Web Design Rules #6: Border-Radius 
        - Guidelines: 
          - Used to increase the playfulness and fun of the design, to make it less serious. The less the radius, the more serious and vice versa.
          - Typefaces have certain roundess, so we can make the border-radius to match the roundness. For example, round design is more border-radius, vice versa
          - Border-radius on buttons, images, around icons, standout sections, and other elements. 

        Implementing Border-radius
        - border-radius: 12px;
        - Distrubute the same amount of border-radius for all 
        - It is the type of rounding. For example, the sign up for demo button on the uflip page. 
        - We can also specifiy certain corners. For example:   border-bottom-left-radius: 0;
        - If the element is square, we can make it rounded by using percentages (50% eg). For links/buttons use a big value that is greater than the height. 

        Web Design Rules #7: Whitespace
        - White-space: makes deisgns look clean, modern, and polished.
        - It creates inviisble relationships between the elements.
        - Good for sepearting things.
        - Guidelines:
          - Use tons of whitespace between sections. (e.g. 192px)
          - Use lots of whitespace btween groups of elements. (e.g. 96-152px or even 24px). Typically, we focus on vertical whitespace; more so than horizontal elements.
          - Use whitespace between elements. 
          - Inside of groups of elements, try to use whitespace instead of lines. 
          - The more some elements (or groups of elements) belong togehter, the closer they should be: law of proximety.
          - Start with a lot of whitespace and remove some from there.
          - Match other design choice. For big text or big icons, more whitespace would be needed and vice versa. 
          - Try a hard rule, such as using mulitple of 16px for all spacing (all margins and paddings) (e.g., 2 4 8 12 16 24 32 48...). This makes designing much easier for designers.


        Web Design Rules #8: Visual Hierachy
        - Visual Hierach: establishing which elements of a deign are the most important ones. 
        - It is about drawing attention to the most important elements. 
        - Ise a combination of position, size, colors, spacing, borders, and shadows to establish a meaningful visual hieracy between elementscomponents.
        - Guidelines:
          - Position important elements closer to the top of the page, where they get more attention.
          - Images draw a lot of attention, so we should use them mindfully.
          - Use whitespace strategically to emphasize elements.
          - For text elements, use font-size, font-weight, color, and whitespace to convey importance.
          - Elements to emphasize: titles, sub-titles, links, buttons, data-points (e.g., numbers), icons. Text can also be de-emphasized.
          - Emphasize an important component using backgound color, shadow, or border (or multiple).
          - Another technique of emphasizing component A over B is by de-emphaszing component B. 
          - Components to emphasize: testimonials (person taling about product), call-to-action sections, highlight sections, preview cards, forms, pricing tables, importnat rows/columns in tables, etc.
          
        Implementing Whitespace and Visual Hierachy
        - Space between sections, add tons of white space.
        - Add lots between groups of elements.

        Web Design Rules #9: User Expericence (UX)
        - User interface (UI): visual presentation of a product. It is how the graphical interface looks and feels like.
        - User Experience (UX): is the overall experience the user has while interacting with the product.
        - UX designs cannot exist without a UI. They go hand in hand.
        - UX designs fullfills both the goals of the user and the business, for example. 
        - Pop-ups are not good UX designs, in many cases.
        - Guidelines:
          - Do not design complicated layouts. Don't reinvent the wheel. Use patterns that users know.
          - Make the call-to-action the most prominent element, and make the text descriptive. For example, a booking hotel button.
          - Use blue text and underlined text only for links!
          - Animations should have a purpose and be fast: between 200 and 500ms.
          - In forms, alignn labels and fields in a single vertical line to make the form easier to scan.
          - Offer users good feedback for all actions: form errors, form success, etc. [web apps]. (For example, "your email has been sent")
          - Place action buttons where they will create an effect (law of locality).
          - Use a descriptive, leyword-focused headline on the main page. Don't be vauge or fancy!
          - Only include relevant information. Cut out fluff and make content 100% clear.
          - Use simple words! Avoid technical jargon and "smart-sounding" words.
          - Break-up long text with sub-headings, images, block quotes, bullet points, etc.
        - All of these points are very good for UX design.
        

        The Website Personalities Framework
        - General feeling or vibe that we want to invoke in our users. 
        - How do you want the website to appear to users? What vibe do you want to trasnmit.
        - Once a personalilty is selected, it will make UI creating easier. E.g, serious vs. playful.
        - After choosing the personalilty, apply that version's personalilty traits. 
        - Serious/Elegent: real-estate, golf, wedding
          - Serif typefaces, light font-weifht, small body font-size.
          - Colors: gold, pastel, black, dark blue or grey
          - Images: big, high-quality images
          - Icons: usualy none, but thin icons and lines may be used,
          - Shadaows: usually none.
          - Border-radius: usually none.
          - Layout: creative and experimental is common.
        - Minimalist/Simple: fashion, portfolio, start-ups
          - Boxy/quared sans-serif, small body font
          - Colors: black or dark grey, with a pure-white background. One color throughout.
          - Images: few images.
          - Icons: no icons
          - Shadows: none
          - Border-radius: none
          - Layout: simple layout.
        - Plain/Netural: corporations, comanies
          - typograpy: netural sans-serif, text is small
          - colors: safe colors, nothing too bright or too washed-out
          - Images: frequently used in a small format
          - Icons: none
          - Shadows: none
          - Border-radius: none
          - Layout: structured condensed layout, with lots of boxes and rows.
        - Bold/Cofident: travel, cstartups, "strong" companies
          - Typography: boxy/squared sans-serif typefacesm big and bold tpography, espcially headings.
          - colors: Multiple bright colors. Big color blocks/sections are used to draw attention.
          - Images: lots of big images
          - Icons: no icons
          - Shadows: no shadows
          - Border-radius: no border radius
          - Layout: All kinds of layouts, no particular tendencies. 
        - Calm/Peaceful: healthcare, consumer well-being
          - Typography: soft serif typefaces freq. for headings
          - Colors: pastel/washed out colors: kighter oranges, yellows, browns, greens blues, etc.
          - Images: usual, matching calm color palette.
          - Icons: Frequent
          - Shadow: usually none
          - Border radius: usual
          - Layout: All kinds of layouts, no particular.
        - Startup/Upbeat: software startups, modern looking companies 
          - Typography: Medium-sized headings, usually one sans-serif typeface. Lighter text.
          - Color: Blues, greens, and purples are widley used with gray background. Gradients are also common.
          - Images: Always used. 3D images and patterns as well for visual detail.
          - Icons: Frequent.
          - Shadows: Subtle shadows are frequent. Glows are becoming more modern.
          - Border-radius: very common.
          - Layout: Rows of cards, Z-patterns, and animations.
        - Playful/fun: child products, food, animals
          - Typo: round and creative, sans-serif typefaces.
          - Color: mutliple colors are used to design a colorful layout.
          - Images: hand drawn or 3-d illustrations, geomtric shapes, and patterns are frequently used.
          - Icons: very frequent, many times in a hand-drawn style. 
          - Shadows: subtle shadows are common.
          - Border-radius: common
          - Layout: All kinds of layouts, nothing particular.

        - Combining playfullness and boldness: personalities can be mixed. For example, boldness and calmness can be mixed into the other five personalities. 


        The Missing Piece: Steal Like an Artist
        - Website personalitiy, website ingredients, guidelines & rules, and getting inspired and stealing like an artist.
        - Get inspiration from other great cites. 
        - Awwards.com, onepage.com, and more are good for this. Land-book.com
        - Scan many pages, which will help.

        _____________________________________________________________


        SECTION 6: Components and Layout Patterns
          
        Web Design Rules #10 - Part 1: Elements and Components
        - Devlop small elements and make them into components and devlop layouts, and from there, make up a final webpage.
        - Guidelines:
          - Use components and common elements to convey your website's information.
          - Combine components into layouts using common layout patterns.
          - Assemble different layout into a complete, final page. 
            - Elements: text, buttons, images, input elements, tags.
            - Components: Pagination, breadcrumbs (used for navgation), stats, gallery, feature box, accordion (Q&A's), tabs, tables, modal's, preview and profile cards, carousel's, forms, and many more.
            - Section components: navigation, footer, hero section, feature row, etc.
            - Layout Patterns: Row of boxes or cards, grid of boxes or cards, z-pattern, f-pattern, single-column, sidebar, muti-column, and more.
        - Check the slides for more information.
        

        Building an Accordion Component Part 1 
        -
        -
        -
        -
        -
        -
        


          

*/
