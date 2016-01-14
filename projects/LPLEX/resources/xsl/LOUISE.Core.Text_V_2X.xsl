<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="no" omit-xml-declaration="yes" />
  <xsl:param name="fileName"></xsl:param>

  <xsl:template match="txtInImg"/>

  <xsl:template match="chunk">
    <div>
      <xsl:attribute name="id">
        <xsl:value-of select="@textType"/>_<xsl:value-of select="@instance"/>
      </xsl:attribute>
      <xsl:attribute name="class">
        <xsl:text>moduleChunk</xsl:text>
      </xsl:attribute>
      <xsl:attribute name="data-alias">
        <xsl:value-of select="@alias"/>
      </xsl:attribute>
      <xsl:apply-templates/>
    </div>
  </xsl:template>

  <xsl:template match="body">

  </xsl:template>

  <xsl:template match="textFormat[@bullet = 'true']">
    <xsl:if test="not(preceding-sibling::textFormat[1]/@bullet = 'true')">
      <xsl:text disable-output-escaping="yes">&lt;ul&gt;</xsl:text>
      <xsl:text> style="</xsl:text>
      <xsl:text>text-align:</xsl:text>
      <xsl:value-of select="@align"/>
      <xsl:text>"</xsl:text>
    </xsl:if>

    <xsl:text disable-output-escaping="yes">&lt;span</xsl:text>
    <xsl:text> style="</xsl:text>
    <xsl:text>font-family:</xsl:text>
    <xsl:value-of select="@font"/>
    <xsl:text>;</xsl:text>
    <xsl:text>font-size:</xsl:text>
    <xsl:value-of select="@size"/>
    <xsl:text>pt;</xsl:text>
    <xsl:text>color:</xsl:text>
    <xsl:value-of select="@color"/>
    <xsl:text>;</xsl:text>
    <xsl:text>text-align:</xsl:text>
    <xsl:value-of select="@align"/>
    <xsl:text>;</xsl:text>
    <xsl:if test="@bold='true'">
      <xsl:text>font-weight:bold;</xsl:text>
    </xsl:if>
    <xsl:if test="@underline='true'">
      <xsl:text>text-decoration:underline;</xsl:text>
    </xsl:if>
    <xsl:if test="@italic='true'">
      <xsl:text>font-style:italic</xsl:text>
    </xsl:if>

    <xsl:text disable-output-escaping="yes">"</xsl:text>

    <xsl:text> data-orgSize="</xsl:text>
    <xsl:value-of select="@size"/>
    <xsl:text disable-output-escaping="yes">"&gt;</xsl:text>

    <xsl:if test="normalize-space(.) = ''">
      <xsl:text disable-output-escaping="yes">&#160;</xsl:text>
    </xsl:if>

    <xsl:if test="number(@charOffset) > 0">
      <xsl:text disable-output-escaping="yes">&lt;sup&gt;</xsl:text>
    </xsl:if>

    <xsl:if test="number(@charOffset) &lt; 0">
      <xsl:text disable-output-escaping="yes">&lt;sub&gt;</xsl:text>
    </xsl:if>

    <xsl:apply-templates/>

    <xsl:if test="number(@charOffset) > 0">
      <xsl:text disable-output-escaping="yes">&lt;/sup&gt;</xsl:text>
    </xsl:if>

    <xsl:if test="number(@charOffset) &lt; 0">
      <xsl:text disable-output-escaping="yes">&lt;/sub&gt;</xsl:text>
    </xsl:if>

    <xsl:text disable-output-escaping="yes">&lt;/span&gt;</xsl:text>

    <xsl:if test="not(following-sibling::textFormat[1]/@bullet)">
      <xsl:text disable-output-escaping="yes">&lt;/ul&gt;</xsl:text>
    </xsl:if>

  </xsl:template>

  <xsl:template name="formatTag">
    <xsl:attribute name="data-orgSize">
      <xsl:value-of select="@size"/>
    </xsl:attribute>
    <xsl:attribute name="style">
      <xsl:text>font-family:</xsl:text>
      <xsl:value-of select="@font"/>
      <xsl:text>;</xsl:text>
      <xsl:text>font-size:</xsl:text>
      <xsl:value-of select="@size"/>
      <xsl:text>pt;</xsl:text>
      <xsl:text>color:</xsl:text>
      <xsl:value-of select="@color"/>
      <xsl:text>;</xsl:text>
      <xsl:text>text-align:</xsl:text>
      <xsl:value-of select="@align"/>
      <xsl:text>;</xsl:text>
      <xsl:if test="@bold='true'">
        <xsl:text>font-weight:bold;</xsl:text>
      </xsl:if>
      <xsl:if test="@underline='true'">
        <xsl:text>text-decoration:underline;</xsl:text>
      </xsl:if>
      <xsl:if test="@italic='true'">
        <xsl:text>font-style: italic</xsl:text>
      </xsl:if>
    </xsl:attribute>

    <xsl:if test="normalize-space(.) = ''">
      <xsl:text disable-output-escaping="yes">&#160;</xsl:text>
    </xsl:if>

    <xsl:if test="number(@charOffset) > 0">
      <xsl:text disable-output-escaping="yes">&lt;sup&gt;</xsl:text>
    </xsl:if>

    <xsl:if test="number(@charOffset) &lt; 0">
      <xsl:text disable-output-escaping="yes">&lt;sub&gt;</xsl:text>
    </xsl:if>

    <xsl:apply-templates/>


    <xsl:if test="number(@charOffset) > 0">
      <xsl:text disable-output-escaping="yes">&lt;/sup&gt;</xsl:text>
    </xsl:if>

    <xsl:if test="number(@charOffset) &lt; 0">
      <xsl:text disable-output-escaping="yes">&lt;/sub&gt;</xsl:text>
    </xsl:if>

  </xsl:template>

  <xsl:template match="textFormat">
    <span>
      <xsl:call-template name="formatTag"/>
    </span>
  </xsl:template>

  <xsl:template match="text()">
    <xsl:if test="starts-with(current(),' ')">
      <xsl:text disable-output-escaping="yes">&#160;</xsl:text>
      <xsl:value-of disable-output-escaping="yes" select="substring(current(),2)"/>
    </xsl:if>
    <xsl:if test="not(starts-with(current(),' '))">
      <xsl:value-of disable-output-escaping="yes" select="current()"/>
    </xsl:if>
  </xsl:template>

  <xsl:template match="br">
    <xsl:text disable-output-escaping="yes"> &lt;br/&gt;</xsl:text>
  </xsl:template>

  <xsl:template match="link">
    <a>
      <xsl:attribute name="href">
        <xsl:text></xsl:text>
      </xsl:attribute>
      <xsl:attribute name="title">
        <xsl:value-of select="@tooltip"/>
      </xsl:attribute>
      <xsl:attribute name="onclick">
        <xsl:text>LOUISE.Navigation.FromLink('</xsl:text>
        <xsl:value-of select="@linkType"/>
        <xsl:text>:</xsl:text>
        <xsl:value-of select="@url"/>
        <xsl:text>'); return false</xsl:text>
      </xsl:attribute>
      <xsl:attribute name="onfocus">
        <xsl:text>this.blur()</xsl:text>
      </xsl:attribute>
      <xsl:apply-templates/>
    </a>
  </xsl:template>

</xsl:stylesheet>