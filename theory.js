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




















*/
