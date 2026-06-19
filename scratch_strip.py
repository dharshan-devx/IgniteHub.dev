import os
import re

def strip_comments_js(content):
    # Regex to match strings (single, double, backtick) or comments
    # We must carefully handle escaped quotes inside strings
    pattern = re.compile(r"""
        (
            "(?:\\.|[^"\\])*" |
            '(?:\\.|[^'\\])*' |
            `(?:\\.|[^`\\])*`
        )
        |
        (
            //.*?$ |
            /\*.*?\*/
        )
    """, re.VERBOSE | re.DOTALL | re.MULTILINE)
    
    def replacer(match):
        if match.group(1):
            return match.group(1) # It's a string
        else:
            return '' # It's a comment
            
    # Remove comments
    stripped = pattern.sub(replacer, content)
    
    # Remove empty lines left behind
    stripped = re.sub(r'^\s*$\n', '', stripped, flags=re.MULTILINE)
    return stripped

test_str = '''
// Header component
const x = "http://test.com"; // link
/* 
block 
*/
const y = `template ${x} // not a comment`;
'''

print(strip_comments_js(test_str))
